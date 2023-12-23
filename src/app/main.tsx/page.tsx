"use client"
// @ts-ignore
import autoComplete from "@tarekraafat/autocomplete.js";

type Props = {}

const Main = (props: Props) => {

  window.onload = function () {
    let config = {
      placeHolder: "Search for Food...",
      data: {
        src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"]
      },
      resultItem: {
        highlight: true,
      },
      selector: "#autoComplete",
    }
    const autoCompleteJS = new autoComplete(config);
  }



  return (
    <>
      <input id="autoComplete" className='border-2' />
    </>
  )
}

export default Main