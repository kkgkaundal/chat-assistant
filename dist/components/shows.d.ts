import React from 'react';
import { shows } from '../data/shows';
interface ShowsComponentProps {
    showList: Array<(typeof shows)[number]>;
}
declare function ShowsComponent({ showList }: ShowsComponentProps): React.JSX.Element;
export { ShowsComponent };
