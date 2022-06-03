const KEY = "todos";
const StorageService = {
   save(data) {
      if (!data) return;
      localStorage.setItem(KEY, JSON.stringify(data));
   },

   get() {
      return localStorage.getItem(KEY)
         ? JSON.parse(localStorage.getItem(KEY))
         : [];
   },
};

export default StorageService;
