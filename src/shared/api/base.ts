import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { API_URL } from '@/shared/config';
import { toast } from 'react-toastify';

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        'X-API-KEY': process.env.NEXT_KINOPOISK_KEY,
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.get(
        endpoint,
        options
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      toast(err?.response?.data?.message || err.message || 'Ошибка');
      throw error;
    }
  }
}

export const apiInstance = new ApiInstance();
