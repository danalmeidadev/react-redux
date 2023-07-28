import CryptoJS from "crypto-js";

interface TypeData {
  [chave: string]: any
}

const keyEncript = "solar123";

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

// Função para obter os dados criptografados do LocalStorage e descriptografá-los
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
  const dadosExemplo: MeuTipoDeDado = {
    campo1: "Valor 1",
    campo2: 42,
  };

  // Salvando os dados criptografados no LocalStorage
  salvarDadosCriptografadosLocalStorage(dadosExemplo);

  // Obtendo os dados criptografados do LocalStorage e descriptografando-os
  const dadosObtidos = obterDadosCriptografadosLocalStorage();
  console.log("Dados obtidos:", dadosObtidos);
}; */

