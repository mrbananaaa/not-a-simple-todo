
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-dark font-display">
      <div className="h-full w-full min-h-screen max-w-lg text-white">{children}</div>
    </div>
  );
};

export default Layout;
