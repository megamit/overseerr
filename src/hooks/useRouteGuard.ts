import { useRouter } from 'next/router';
import { useEffect } from 'react';
import baseUrl from '../utils/baseUrl';
import { Permission, PermissionCheckOptions, useUser } from './useUser';

const useRouteGuard = (
  permission: Permission | Permission[],
  options?: PermissionCheckOptions
): void => {
  const router = useRouter();
  const { user, hasPermission } = useUser();

  useEffect(() => {
    if (user && !hasPermission(permission, options)) {
      router.push(baseUrl('/'));
    }
  }, [user, permission, router, hasPermission, options]);
};

export default useRouteGuard;
