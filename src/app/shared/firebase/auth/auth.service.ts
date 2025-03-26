import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user!: User;

  constructor(
    private _firestore: Firestore,
    private _afAuth: Auth,
  ) { }

  async signIn(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this._afAuth, email, password);
      localStorage.setItem('auth-credential', JSON.stringify(result.user));
      return result;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Credenciais inválidas ou erro na autenticação.');
    }
  }

  async signUp(email: string, password: string) {
    const result = await createUserWithEmailAndPassword(this._afAuth, email, password);
    return result;
  }

  getUser() {
    const userData = localStorage.getItem('auth-credential');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;  // Ou tratar de alguma outra forma, como redirecionar o usuário para login
  }

  signOut() {
    localStorage.removeItem('auth-credential');
    this._afAuth.signOut();
  }
  getCurrentUser() {
    this.user = JSON.parse(localStorage.getItem('auth-credential')!);
    const userInfo = JSON.parse(localStorage.getItem('user-credential')!);
    return userInfo;
  }

  async getUserInfo(id: string): Promise<void> {
    const contactRef = collection(this._firestore, 'contact');
    const queryResponse = query(contactRef, where("uid", "==", id));

    try {
      const res = await getDocs(queryResponse);
      if (!res.empty) {
        const data = res.docs[0].data();
        delete data['password'];  // Garantir que a senha não seja armazenada
        localStorage.setItem('user-credential', JSON.stringify(data));
      }
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
    }
  }

}
