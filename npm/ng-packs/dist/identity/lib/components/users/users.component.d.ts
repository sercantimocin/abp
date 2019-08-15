import { ABP } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { TemplateRef, TrackByFunction } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Identity } from '../../models/identity';
export declare class UsersComponent {
    private confirmationService;
    private fb;
    private store;
    data$: Observable<Identity.UserItem[]>;
    totalCount$: Observable<number>;
    modalContent: TemplateRef<any>;
    form: FormGroup;
    selected: Identity.UserItem;
    selectedUserRoles: Identity.RoleItem[];
    roles: Identity.RoleItem[];
    visiblePermissions: boolean;
    providerKey: string;
    pageQuery: ABP.PageQueryParams;
    isModalVisible: boolean;
    loading: boolean;
    trackByFn: TrackByFunction<AbstractControl>;
    readonly roleGroups: FormGroup[];
    constructor(confirmationService: ConfirmationService, fb: FormBuilder, store: Store);
    onSearch(value: any): void;
    buildForm(): void;
    openModal(): void;
    onAdd(): void;
    onEdit(id: string): void;
    save(): void;
    delete(id: string, userName: string): void;
    onPageChange(data: any): void;
    get(): void;
}