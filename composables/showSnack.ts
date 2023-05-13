export function useShowSnack(payload: string, snackbar: any) {
   snackbar.add({
      type: "success",
      text: payload,
   });
}
