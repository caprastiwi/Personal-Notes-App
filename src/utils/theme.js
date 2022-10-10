function getTheme() {
    return localStorage.getItem('theme');
  }
  
  function putTheme(theme) {
    return localStorage.setItem('theme', theme);
  }
  
  export {
    getTheme,
    putTheme,
  };