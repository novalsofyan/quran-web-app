export default function FooterComponents() {
  const yearFooter = new Date().getFullYear();

  return (
    <footer className="grow-0 shrink-0 w-full flex justify-center items-center">
      <p className="font-size-footer w-full bg-gray-800 p-5 text-white text-center">&copy; {yearFooter} Lucid Dreamworks Dev ☕.</p>
    </footer>
  );
}
