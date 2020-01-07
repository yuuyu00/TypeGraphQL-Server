import { Length, IsEmail } from 'class-validator'
import { InputType, Field } from 'type-graphql'
import { IsEmailAlreadyUsed } from './isEmailAlreadyUsed'

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 30, { message: 'oiiiiiiwwwwwwwwww' })
  firstName: string

  @Field()
  @Length(1, 30)
  lastName: string

  @Field()
  @IsEmail()
  @IsEmailAlreadyUsed({
    message: 'そのアドレスはもう使われてるよ〜〜〜〜んwwwwwwww',
  })
  email: string

  @Field()
  password: string
}
