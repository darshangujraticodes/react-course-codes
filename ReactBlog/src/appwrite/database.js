import { Client, Databases, ID } from "appwrite";
import config from "../config/config";

// In Apprwrite database is of 2 types server sdk and normal relationships
// https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument

export class DbService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, slug, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, slug, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error", error);
      return false;
    }
  }

  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error", error);
      return false;
    }
  }

  // note status which your are applying are should be attributed index in appwrite otherwise wont function
  async getAllPost() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("status", "active"), Query.limit(6), Query.offset(0)]
      );
    } catch (error) {
      console.log("Appwrite Service :: getAllPost :: error", error);
      return false;
    }
  }
}

const dbservice = new DbService();

export default dbservice;
