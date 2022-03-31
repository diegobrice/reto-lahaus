import { render, screen } from '@testing-library/react';
import List from '../../components/List';
import '@testing-library/jest-dom';
import { mockData } from '../../mockData';
import { getFavoriteListContent } from '../../utils/formatter';

describe('List component', () => {
  let { favoriteList } = mockData;
  beforeEach(() => {
    render(<List favoriteList={favoriteList} />);
  });
  it('renders at least one image', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
  it('renders the title', () => {
    const listTitle = favoriteList.attributes.name;
    const title = screen.getByText(listTitle);
    expect(title).toBeInTheDocument();
  });
  it('renders the content', () => {
    const realEstateListLength = favoriteList.real_estate_list.length;
    const listContent = getFavoriteListContent(realEstateListLength);
    const content = screen.getByText(listContent);
    expect(content).toBeInTheDocument();
  });
});
