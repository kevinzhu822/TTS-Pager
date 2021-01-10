import { Note } from './note';


export const NOTES: Note[] = [
    {name: 'Request Female', icon: 'female.jpg', input: false, hidden: false},
    {name: 'Request Male', icon: 'male.jpg', input: false, hidden: false},
    {name: 'Request', icon: 'request.jpg', input: false, hidden: false},
    {name: 'Hard Pressure', icon: 'hardpressure.jpg', input: false, hidden: false},
    {name: 'Split Combo', icon: 'splitcombo.jpg', input: false, hidden: false},
    {name: 'Pregnant', icon: 'pregnant.jpg', input: true, hidden: false},
    {name: 'Other', icon: null, input: true, hidden: false}
];

export const NoteEnum = {
    'Request Female': 0,
    'Request Male': 1,
    'Request': 2,
    'Hard Pressure': 3,
    'Split Combo': 4,
    'Pregnant': 5,
    'Other': 6
};
    