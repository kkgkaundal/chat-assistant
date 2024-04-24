import React from 'react';
import { shows } from '../data/shows';
interface TicketProps {
    type: 'confirm' | 'ticket';
    show: (typeof shows)[0];
    params: any;
}
declare function Ticket({ type, show, params }: TicketProps): React.JSX.Element;
export { Ticket };
