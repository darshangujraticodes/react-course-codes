import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // here parameter are been  destructure becoz input is take in object format
  // parameter data is destructured {}
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // here after successful signup we are direcly applying login function
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service :: createAccount() :: error", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailSession(email, password);
      return userLogin;
    } catch (error) {
      console.log("Appwrite Service :: login() :: error", error);
      throw error;
    }
  }

  // this function will help you to find whether the user is login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser() :: error", error);
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      // it has 2 delete session method
      // deletesession() and deleteSessions()
      // deletesession()  -> delete session and logout from current accessing device
      // deletesessions() -> delete session and logout from all other accessing device too.
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout() :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
