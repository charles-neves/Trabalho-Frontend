import { TestBed } from '@angular/core/testing';

import { MasterUsuarioService } from './master-usuario.service';

describe('MasterUsuarioService', () => {
  let service: MasterUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
