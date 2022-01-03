import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

export const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.alert.msg}
      </div>
    )
  );
};
