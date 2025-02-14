export class CreateNoteDTO {
  readonly title: string;
  readonly description: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: string;
}
