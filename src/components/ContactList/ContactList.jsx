import PropTypes from 'prop-types';
import { List, Item, Text, Img } from './ContactListStyled';
import { ButtonList } from './ButtonList/ButtonList';

const noImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrGcz-CAJweJ_YbvY8Sb2bPsCNQwsSJ2jng&usqp=CAU';

export const ContactList = ({ items }) => {
  const itemList = items.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <Img src={noImage} alt="" width="100"></Img>
        <div>
          <Text>{name}</Text>
          <Text>{number}</Text>
          <ButtonList id={id} name={name} number={number} />
        </div>
      </Item>
    );
  });

  return <List>{itemList}</List>;
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  itemList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
