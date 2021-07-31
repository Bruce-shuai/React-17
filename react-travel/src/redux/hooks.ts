// 这样的操作是为了什么呢？
import { 
  useSelector as useReduxSelector, 
  TypedUseSelectorHook 
} from 'react-redux';
import { RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;


