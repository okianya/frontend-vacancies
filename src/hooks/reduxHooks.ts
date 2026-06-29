import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();
