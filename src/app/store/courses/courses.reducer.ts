import { Action, createReducer } from '@ngrx/store';

// Add your code here

export interface CoursesState {
    allCourses: Array<string>,
    course: string,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: string
}

export const initialState: CoursesState = {
    allCourses: [],
    course: '',
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesReducer = createReducer(initialState);

export const coursesFeatureKey = 'courses';

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
