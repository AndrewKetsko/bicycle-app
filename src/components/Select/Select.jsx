import { OptionText, SelectImg, SelectText } from "./Select.styled";
import Arrow from "../../icons/Arrow.svg";
import { useEffect, useState } from "react";
import { useChangeStatusMutation } from "../../redux/bicycleApi";

export const Select = ({ status, id }) => {
  const [isOpen, setOpen] = useState(false);
  const [changeStatus] = useChangeStatusMutation();
  const options = ["available", "busy", "unavailable"].filter(
    (e) => e !== status
  );

  useEffect(() => {
    const mouseClick = (e) => {
      if (e.target.nodeName !== "SELECT") setOpen(false);
    };
    window.addEventListener("click", mouseClick);
    return () => window.removeEventListener("click", mouseClick);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <SelectImg alt={"arrow"} src={Arrow} isOpen={isOpen} />
      <SelectText
        onChange={(e) => {
          changeStatus({ id, status: e.target.value });
        }}
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        <OptionText value={""}>{status}</OptionText>
        {options.map((item) => (
          <OptionText key={item} value={item}>
            {item}
          </OptionText>
        ))}
      </SelectText>
    </div>
  );
};
