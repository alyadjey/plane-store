import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import styles from "./styles.module.css";

const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button containerClassName={styles.button} onClick={() => navigate("/")}>
        На главную
      </Button>
    </ContentWrapper>
  );
};
export default OrderPage;
