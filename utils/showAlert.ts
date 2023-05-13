export function showAlert(payload: string, snackbar:any){
   snackbar.add({
      type: "error",
      text: payload,
   });
}