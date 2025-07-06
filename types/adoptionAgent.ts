export default interface AdoptionAgent {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  petsResponsibleFor: string[]; // Array of pet IDs
}
