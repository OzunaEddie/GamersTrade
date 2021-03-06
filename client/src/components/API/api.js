import Cookies from 'universal-cookie';

export default class API {
  async logIn(data) {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['authenticated']) {
      const cookies = new Cookies();
      cookies.set('token', response_1['token'], { path: '/' });
      window.location.href = '/';
    } else {
      return response_1['error'];
    }
  }

  async register(data) {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['registered']) {
      window.location.href = '/';
    } else {
      return response_1['error'];
    }
  }

  async getTransactionHistory(data) {
    const response = await fetch('/transaction/history', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['transactionList']
  }

  async updateProfile(data) {
    const response = await fetch('/profile/update', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['error'];
  }

  async getUserProfile(data) {
    const response = await fetch('/profile/getProfile', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['profile']
  }

  async addListing(data) {
    const response = await fetch('/listings/addListing', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response['error'];
  }

  async getListings(data) {
    const response = await fetch('/listings/showListings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['gameListings'];
  }

}

