import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import TransactionHistory from "../components/TransactionHistory"

const Home = () => {
  return (
    <div className={style.wrapper}>     
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}

export default Home

const style = {
  wrapper: `h-screen min-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col`,

}