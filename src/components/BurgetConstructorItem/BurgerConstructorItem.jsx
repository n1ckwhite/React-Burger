import React, { useRef } from "react";
import styleBurgerConstructorItem from "./BurgerConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { menuItemPropTypes } from "../../utils/constans";
import { useDrag, useDrop } from "react-dnd";
export const BurgerConstructorItem = ({
  item,
  index,
  isLocked,
  type,
  position,
  moveIngredient,
  onDelete,
  drag,
}) => {
  const ref = useRef(null);
  let pos;
  if (position) {
    pos = "(верх)";
  } else if (position === undefined) {
    pos = "";
  } else {
    pos = "(низ)";
  }
  const [, drop] = useDrop({
    accept: "ingredient",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveIngredient(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, dragRef] = useDrag({
    type: isLocked ? "bun" : "ingredient",
    item: () => ({ item, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  dragRef(drop(ref));

  return (
    <li
      ref={!isLocked ? ref : null}
      className={`${styleBurgerConstructorItem.li} mb-4`}
      style={{ opacity }}
    >
      {drag && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={`${item.name} ${pos}`}
        price={item.price}
        thumbnail={item.image}
        handleClose={onDelete}
      />
    </li>
  );
};

BurgerConstructorItem.propTypes = {
  item: menuItemPropTypes.isRequired,
  index: PropTypes.number,
  type: PropTypes.string.isRequired,
  drag: PropTypes.bool,
  position: PropTypes.bool,
  isLocked: PropTypes.bool,
  onDelete: PropTypes.func,
  moveIngredient: PropTypes.func,
};
