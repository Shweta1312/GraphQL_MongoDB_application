import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver{

  @Query(returns => LessonType)
  lesson(){
    return {
      id: '12asdfs',
      name: 'Nestjs',
      startDate: (new Date().toISOString()),
      endDate: (new Date().toISOString())
    }
  }

  @Mutation(returns => LessonType)
  createLesson(){

  }
}