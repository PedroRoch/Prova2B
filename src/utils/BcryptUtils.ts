import bcrypt from 'bcrypt';

const saltRounds = 10; // Define o número de saltos para a criptografia

async function generateHash(password: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error('Erro ao gerar o hash da senha');
  }
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (error) {
    throw new Error('Erro ao comparar a senha');
  }
}

export { generateHash, comparePassword };