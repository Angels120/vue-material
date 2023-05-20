import axios from 'axios';
import { IChatInit } from './type';

/**
 * Login
 */
export async function initChat() {
  const options = {
    method: 'get',
    url: '/api/chat/init',
    delay: 2000,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return await axios.request<IChatInit>(options);
}
