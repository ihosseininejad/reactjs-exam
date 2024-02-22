export default class CookieHandler {

    public static get(name: string): string | null {
      const cookies: string[] = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie: string = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }

    public static set(name: string, value: string, expireTime: number = 86400): void {
      const date: Date = new Date();
      date.setTime(date.getTime() + (expireTime * 1000));
      const expires: string = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  }  