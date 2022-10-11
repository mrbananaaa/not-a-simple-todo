import googleIcon from "../img/google-icn.png";

const style = {
  card: `text-dark bg-white w-[80%] flex flex-col justify-center items-center py-6 rounded-lg space-y-8 select-none`,
  title: `font-semibold text-xl`,
  btn: `flex justify-center items-center py-3 w-[80%] rounded-xl space-x-5 shadow-[0px_4px_15px_rgba(0,0,0,0.25)] hover:bg-gray-100 cursor-pointer active:bg-opacity-80`,
  btnText: `tracking-tighter font-medium`,
};

const GoogleCard = ({ onClick }) => {
  return (
    <div className={style.card}>
      <div className={style.title}>Keep ur data on cloud</div>
      <div className={style.btn} onClick={onClick}>
        <img src={googleIcon} height={35} width={35} alt="logo" />
        <div className={style.btnText}>SignIn with Google</div>
      </div>
    </div>
  );
};

export default GoogleCard;
