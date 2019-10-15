import { DurationPipe } from './duration.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
