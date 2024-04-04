#!/bin/bash
for i in {1..6}
do
    yarn test --grep "test name"
done