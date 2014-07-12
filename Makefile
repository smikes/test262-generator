JSSOURCES=$(shell find lib -name '*.js' -print)

prepublish: lint doc test no-dos-endings check-coverage jstest-slow

lint: jslint 

jslint:
	./node_modules/.bin/jslint --terse -- $(JSSOURCES) ; echo

test: jstest

test-slow: jstest-slow

jstest:
	./node_modules/.bin/mocha

jstest-slow:
	./node_modules/.bin/mocha -t 30000 -s 5000 test/slow


no-dos-endings:
	file $(JSSOURCES) | grep -v CRLF > /dev/null

# coverage only for javascript at this point
cover: $(JSSOURCES)
	./node_modules/.bin/istanbul cover --print=both ./node_modules/mocha/bin/_mocha --

check-coverage: cover
	./node_modules/.bin/istanbul check-coverage --statements 90 --branches 90 --functions 90 --lines 90

doc:
	./node_modules/.bin/yuidoc $(DOCDIRS)

clean:
	-find . -name "*~" | xargs rm

.PHONY: jslint jstest no-dos-endings check-coverage clean
