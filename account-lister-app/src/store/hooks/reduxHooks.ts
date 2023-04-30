import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

// Use throughout the app instead of plain `useDispatch`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
