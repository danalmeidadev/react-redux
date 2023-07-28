import CryptoJS from "crypto-js";

interface TypeData {
  [chave: string]: any
}

const keyEncript = String(process.env.KEY_LOCAL);

const encryptdata = (data: TypeData): string => {
  const dataString = JSON.stringify(data);
  const dadosEncryptData = CryptoJS.AES.encrypt(dataString, keyEncript).toString();
  return dadosEncryptData;
};

const decryptdata = (dataenCrypted: string): TypeData | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(dataenCrypted, keyEncript);
    const dataString = bytes.toString(CryptoJS.enc.Utf8);
    const datadeCrypted = JSON.parse(dataString) as TypeData;
    return datadeCrypted;
  } catch (error) {
    console.error("Erro ao descriptografar os dados:", error);
    return null;
  }
};

export const saveEncryptedDataLocalStorage = (key: string, dados: TypeData): void => {
  try {
    const dataenCrypted = encryptdata(dados);
    localStorage.setItem(key, dataenCrypted);
    console.log("Dados salvos com criptografia no LocalStorage!");
  } catch (error) {
    console.error("Erro ao salvar os dados criptografados:", error);
  }
};

export const getEncryptedDataLocalStorage = (key: string): TypeData | null => {
  try {
    const dadosCriptografados = localStorage.getItem(key);
    if (dadosCriptografados) {
      const dadosDescriptografados = decryptdata(dadosCriptografados);
      return dadosDescriptografados;
    }
    return null;
  } catch (error) {
    console.error("Erro ao obter os dados criptografados:", error);
    return null;
  }
};

export const removeDataFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
    console.log(`Dados da chave "${key}" removidos do LocalStorage.`);
  } catch (error) {
    console.error("Erro ao remover os dados do LocalStorage:", error);
  }
};

// Exemplo de uso:
/* const exemploPersistenciaComCriptografia = () => {
  const example: MyData = {
    campo1: "Valor 1",
    campo2: 42,
  };

  const dadosObtidos = obterDadosCriptografadosLocalStorage();
  console.log("Dados obtidos:", dadosObtidos);
}; */

