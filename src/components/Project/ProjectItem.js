import Heading from "../Heading/Heading";

import { Item, Link } from "./ProjectItem.styled";

export default function ProjectItem({ id, title, img }) {
  return (
    <Item>
      <img src={img} alt="description" />
      <Link to={`detail/${id}`}>
        <Heading el="h4">{title}</Heading>
      </Link>
    </Item>
  );
}
