"use client"
import Image from "next/image"
import "react-loading-skeleton/dist/skeleton.css"
import info from "../../assets/images/info.svg"
import { formatNumberWithComma } from "../utils/helpers"

const Stats = ({ walletData }: any) => {
  const stats = [
    {
      id: 1,
      figure: `USD ${formatNumberWithComma(walletData?.ledger_balance)}`,
      name: "Ledger Balance",
    },
    {
      id: 2,
      figure: `USD ${formatNumberWithComma(walletData?.total_payout)}`,
      name: "Total Payout",
    },
    {
      id: 3,
      figure: `USD ${formatNumberWithComma(walletData?.total_revenue)}`,
      name: "Total Revenue",
    },
    {
      id: 4,
      figure: `USD ${formatNumberWithComma(walletData?.pending_payout)}`,
      name: "Pending Payout",
    },
  ]

  return (
    <div className="w-[271px] ">
      {stats?.map((item) => (
        <div key={item?.id} className="w-full mb-8">
          <div className="flex justify-between items-center">
            <h6 className="mb-[10px] text-sm text-text font-medium">
              {item?.name}
            </h6>
            <Image src={info} width={20} height={20} alt="info icon" />
          </div>
          <h2 className="text-[28px] text-dark font-bold">{item?.figure}</h2>
        </div>
      ))}
    </div>
  )
}

export default Stats
