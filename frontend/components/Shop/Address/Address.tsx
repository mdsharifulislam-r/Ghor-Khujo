"use client";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import { useRouter, useSearchParams } from "next/navigation";
import useTransformSearchParams from "@/lib/helper/useTransformSearchParam";


export default function Address({setAddressk}:{setAddressk: Dispatch<SetStateAction<string>>}) {
  const [division, setDivision] = useState<string[]>([]);
  const [district, setDistrict] = useState<string[]>([]);
  const [upazilla, setUpazilla] = useState<string[]>([]);
  const [address, setAddress] = useState({
    division: "",
    district: "",
    upazilla: "",
  });
  useEffect(() => {
    fetch("https://bdapis.com/api/v1.2/divisions")
      .then((res) => res.json())
      .then((data: { data: [{ division: string }] }) =>
        setDivision(() => {
          const newArr = data?.data?.map((item) => item.division);
          return newArr;
        })
      );
  }, []);

  const router = useRouter()
  const searchParams = useSearchParams()
  const obj = Object.fromEntries(searchParams)
  


  async function handleAddress(e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (name == "division") {
      const res = await fetch(`https://bdapis.com/api/v1.2/division/${value}`);
      const data: { data: { district: string }[] } = await res.json();
      const district = data?.data?.map((item) => item.district);

      setDistrict(district);
    }
    if (name == "district") {
      const res = await fetch(
        `https://bdapis.com/api/v1.2/division/${address.division}`
      );
      const data: { data: { district: string; upazilla: [] }[] } =
        await res.json();
      const district = data?.data?.find((item) => item.district == value);
      setUpazilla(district?.upazilla || []);
    }

   
  }


  
  return (
    <div className="md:py-2" onMouseOver={()=>setAddressk(`${address.division}${address.district&&`,${address.district}`}${address.upazilla&&`,${address.upazilla}`}`)}>
      <SelectBox
        title="Divition"
        options={["Select Divition", ...division]}
        name="division"
        id="divition"
        onChange={handleAddress}
      />
      <SelectBox
        title="Zilla"
        options={["Select District", ...district]}
        name="district"
        id="zilla"
        onChange={handleAddress}
      />

      <SelectBox
        title="Upazilla"
        options={["Select Upazilla", ...upazilla]}
        name="upazilla"
        id="upazilla"
        onChange={handleAddress}
      />
    </div>
  );
}
