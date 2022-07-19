import {renderHook} from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import {ReduxWrapperProvider} from '../../ReduxWrapperProvider';
import {useGetRunListQuery} from '../TraceTest.api';

test('useGetRunListQuery', async () => {
  fetchMock.mockResponse(JSON.stringify([]));
  const {result, waitForNextUpdate} = renderHook(() => useGetRunListQuery({testId: '3321'}), {
    wrapper: ReduxWrapperProvider,
  });
  expect(result.current.isLoading).toBeTruthy();
  await waitForNextUpdate({timeout: 10000});
  expect(result.current.isLoading).toBeFalsy();
});
