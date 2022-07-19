import { BigNumber, ethers } from "ethers";

export function shortenAddress(address: string): string {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
}

export function parseBalance(
  balance: BigNumber,
  decimals = 18,
  decimalToDisplay = 6
) {
  return parseFloat(ethers.utils.formatUnits(balance, decimals)).toFixed(
    decimalToDisplay
  );
}

export function parseBalanceToBigNumber(
  balance: string,
  decimals = 18
): BigNumber {
  return ethers.utils.parseUnits(balance, decimals);
}

export function isNumberValid(value: string, decimals = 18) {
  if (value === "") return true;
  const pattern = `^\\d+\\.?\\d{0,${decimals}}$`;
  const reg = new RegExp(pattern, "g");

  return !!reg.exec(value);
}

export function amountWithSlippage(amount: BigNumber, slippage: string) {
  const numerator = 100 - Number(slippage);
  const decimalCounts = countDecimals(numerator);

  return amount
    .mul(numerator * 10 ** decimalCounts)
    .div(100 * 10 ** decimalCounts);
}

export default function balanceWithSlippage(
  balance: string,
  slippage: string,
  decimals = 18
) {
  return parseBalance(
    amountWithSlippage(parseBalanceToBigNumber(balance, decimals), slippage),
    decimals
  );
}

export function countDecimals(value: number) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length;
}
