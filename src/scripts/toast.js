export function toast(text, color) {
    Toastify({
      text: text,
      duration: 2000,
      close: true,
      gravity: 'top',
      position: 'center',
      style: {
        background: color
    }
 }).showToast()
  }