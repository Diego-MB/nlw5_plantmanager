// Quando tiver qualquer arquivo que termine com extensão png
// para dar certo na exportação "../assets/watering.png"

declare module '*.png' {
  const content: any;
  export default content;
}