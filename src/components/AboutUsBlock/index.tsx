import React from "react";
// styles
import styles from "./AboutsUsBlock.module.scss";
// components
import PizzaDivider from "components/UI/PizzaDivider";

const AboutUsBlock = () => {
  return (
    <div className={styles.root}>
      <article>
        <p>
          Добро пожаловать в мир ароматных и неповторимых вкусов – добро
          пожаловать в сеть пиццерий <span>"ПодкреPizza"</span>! Мы – команда
          энтузиастов, горящих желанием подарить вам самый насыщенный опыт в
          мире пиццы.
        </p>
        <PizzaDivider />
        <p>
          Наша история началась с простой идеи: создавать уникальные, свежие и
          вкусные пиццы, которые приносят радость и наслаждение каждому кусочку.
          Мы стремимся удивлять вас каждый день, используя только лучшие
          ингредиенты и самые инновационные технологии приготовления.
        </p>
        <PizzaDivider />
        <p>
          <span>"ПодкреPizza"</span> – это не просто пицца. Это искусство
          сочетания ингредиентов, создание атмосферы и обещание прекрасного
          наслаждения. Наши повара являются настоящими мастерами своего дела,
          каждый из которых вкладывает частичку своей души в каждую
          приготовленную пиццу.
        </p>
        <PizzaDivider />
        <p>
          Наше меню предлагает широкий выбор вариаций – от классических
          итальянских вкусов до оригинальных авторских комбинаций, созданных
          специально для ценителей настоящего вкуса. Независимо от того,
          выбираете ли вы сочные мясные пиццы или предпочитаете вегетарианские
          варианты с изысканными соусами – у нас есть пицца для всех и каждого.
        </p>
        <PizzaDivider />
        <p>
          <span>"ПодкреPizza"</span> – это не просто место для отличной еды, это
          место, где вы можете насладиться временем с семьей и друзьями. Мы
          создаем атмосферу уюта и гостеприимства, чтобы каждый ваш визит
          становился ярким и запоминающимся событием.
        </p>
        <PizzaDivider />
        <p>
          Присоединяйтесь к нам и дайте себе возможность окунуться в мир
          изысканных вкусов <span>"ПодкреPizza"</span>. Ваше удовольствие – наша
          главная цель!
        </p>
      </article>
    </div>
  );
};

export default AboutUsBlock;