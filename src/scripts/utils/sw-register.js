const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
