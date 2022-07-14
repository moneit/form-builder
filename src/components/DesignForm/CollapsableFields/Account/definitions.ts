export enum FieldName {
  FirstName = 'firstName',
  LastName = 'lastName',
  PhoneNumber = 'phoneNumber',
  Email = 'email',
  Title = 'title',
  Address = 'address',
  PersonId = 'personID',
  Password = 'password',
  Position = 'position',
  AccountType = 'accountType',
  Attachment = 'attachment',
}

export enum FieldLabel {
  FirstName = 'First Name',
  LastName = 'Last Name',
  PhoneNumber = 'Phone Number',
  Email = 'Email',
  Title = 'Title',
  Address = 'Address',
  PersonId = 'Person ID',
  Password = 'Password',
  Position = 'Position',
  AccountType = 'Account Type',
  Attachment = 'Attachment',
}

export const nameToLableMap: {
  [name in FieldName]: FieldLabel;
} = {
  [FieldName.FirstName]: FieldLabel.FirstName,
  [FieldName.LastName]: FieldLabel.LastName,
  [FieldName.PhoneNumber]: FieldLabel.PhoneNumber,
  [FieldName.Email]: FieldLabel.Email,
  [FieldName.Title]: FieldLabel.Title,
  [FieldName.Address]: FieldLabel.Address,
  [FieldName.PersonId]: FieldLabel.PersonId,
  [FieldName.Password]: FieldLabel.Password,
  [FieldName.Position]: FieldLabel.Position,
  [FieldName.AccountType]: FieldLabel.AccountType,
  [FieldName.Attachment]: FieldLabel.Attachment,
};
