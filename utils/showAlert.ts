export function showAlert(payload: string, snackbar){
   snackbar.add({
      type: "error",
      text: payload,
   });
}